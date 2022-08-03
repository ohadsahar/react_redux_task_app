import Alerts from "@/core/components/Alerts/Alerts";
import Footer from "@/core/components/Footer/Footer";
import Header from "@/core/components//Header/Header";
import ProgressLine from "@/core/components//ProgressLine/progress-line";
import SearchBar from "@/core/components/SearchBar/SearchBar";
import TaskForm from "@/core/components/TaskForm/TaskForm";
import Tasks from "@/core/components//Tasks/Tasks";
import { LayoutWrapper, TopSection } from "./styled";
import { TaskStatusType } from "@/constants/task_status";

const HomeScreen = () => {
  return (
    <LayoutWrapper data-testid="layout-box">
      <Alerts />
      <Header />
      <ProgressLine />
      <SearchBar />
      <TaskForm
        taskName={""}
        status={TaskStatusType.COMPLETED}
        handleEditClick={() => {}}
      />
      <TopSection>
        <Tasks />
      </TopSection>
      <Footer />
    </LayoutWrapper>
  );
};

export default HomeScreen;
