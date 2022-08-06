import { TaskStatusType } from '@/constants/TaskStatus';
import Task from '@/core/components/Task/Task';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { TaskProps } from 'models/TaskProps.model';
import AppTestUtil from '../../../AppTestUtil';

describe('Testing task component', () => {
  it('Testing task component showing on screen', () => {
    const task: TaskProps = {
      id: '1',
      taskName: 'Clean',
      status: TaskStatusType.CREATED,
    };

    render(
      <AppTestUtil>
        <Task
          task={task}
          setCurrentEdit={() => {}}
          showCheck
          showPause
          handleAction={() => {}}
          handleEdit={() => {}}
        />
      </AppTestUtil>
    );

    const baseComponent = screen.getByTestId('task-box');
    expect(baseComponent).toBeInTheDocument();
  });
});
