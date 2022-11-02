import React from 'react';

interface TaskProps {
    task: {
        id: string
        title: string
        state: string
    }
    onArchiveTask: () => void
    onPinTask: () => void
}

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }: TaskProps) => {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
}

export default Task