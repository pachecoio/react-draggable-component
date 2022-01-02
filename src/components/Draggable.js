import styled from 'styled-components';
import {useState} from "react";

const DraggableArea = styled.div`
  width: 100vw;
  height: 100vh;
`

const DraggableItemContainer = styled.div.attrs(props => ({
    style: {
        top: props.top,
        left: props.left,
        position: props.position || 'relative',
        transform: `translateY(${props.position === 'absolute' ? '-50%' : '0'}) translateX(${props.position === 'absolute' ? '-50%' : '0'})`
    },
}))`
  transform: translateY(-50%) translateX(-50%);
`

function DraggableItem({children}) {
    const [holding, setHolding] = useState(false);
    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)
    const [position, setPosition] = useState('relative')

    const onMouseMove = ({pageX, pageY}) => {
        if(!holding) return;
        setTop(pageY)
        setLeft(pageX)
    }

    const onMouseDown = ({clientX, clientY}) => {
        setHolding(true)
        setTop(clientY)
        setLeft(clientX)
        setPosition('absolute')
    }
    const onMouseUp = () => setHolding(false)

    return (
        <DraggableItemContainer
            onMouseMove={onMouseMove}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            top={`${top}px`}
            left={`${left}px`}
            position={position}
        >
            {children}
        </DraggableItemContainer>
    )
}

export default function Draggable({children}) {
    const renderDraggableItem = (child) => (
        <DraggableItem key={Math.floor(Math.random() * 1000)}>
            {child}
        </DraggableItem>
    )

    return (
        <DraggableArea>
            {Array.isArray(children) ? children.map(renderDraggableItem) : renderDraggableItem(children)}
        </DraggableArea>
    )
}