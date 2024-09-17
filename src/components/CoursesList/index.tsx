import cx from "clsx";
import { Text } from "@mantine/core";
import { useListState } from "@mantine/hooks";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import classes from "@/components/CoursesList/styles.module.css";
import { ICourse } from "@/interfaces";
import { useMemo } from "react";

interface CoursesListProps {
  courses: ICourse[];
}

export default function CoursesList({ courses }: CoursesListProps) {
  const allCourses = useMemo(
    () =>
      courses.map(({ id, name }) => ({
        id,
        symbol: name.slice(0, 2).toUpperCase(),
        name: name,
      })),
    [courses]
  );

  const [state, handlers] = useListState(allCourses);
  console.log("courses", courses);
  const items = state.map((item, index) => (
    <Draggable key={item.symbol} index={index} draggableId={item.symbol}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, {
            [classes.itemDragging]: snapshot.isDragging,
          })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Text className={classes.symbol}>{item.symbol}</Text>
          <div>
            <Text
              component="a"
              target="_blank"
              href="/curriculo-frontend-kahamba.pt.pdf"
              download="curriculo-frontend-kahamba"
            >
              {item.name}
            </Text>
          </div>
        </div>
      )}
    </Draggable>
  ));

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) =>
        handlers.reorder({ from: source.index, to: destination?.index || 0 })
      }
    >
      <Droppable droppableId="dnd-list" direction="vertical">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
