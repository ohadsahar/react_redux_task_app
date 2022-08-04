import AppTitle from "@/shared/typography/app_title";
import { useDate } from "./hooks/useData";
import {
  DateWrapper,
  DayWrapper,
  HeaderWrapper,
  YearAndMonthWrapper,
} from "./styled";

const Header = () => {
  const { convertedDate } = useDate();

  return (
    <HeaderWrapper data-testid="header-box">
      <DateWrapper data-testid="header-date-wrapper">
        <DayWrapper data-testid="header-day-wrapper">
          <AppTitle
            testId="header-day"
            role="header-day-role"
            title={convertedDate?.day.toString()}
            fontWeight="bold"
            fontSize="5vw"
          />
        </DayWrapper>
        <YearAndMonthWrapper data-testid="header-month-year-wrapper">
          <AppTitle
            testId="header-month"
            role="header-month-role"
            title={convertedDate?.month}
            fontWeight="bold"
            fontSize="2vw"
          />
          <AppTitle
            testId="header-year"
            role="header-year-role"
            title={convertedDate?.year.toString()}
            fontWeight="200"
            fontSize="2vw"
          />
        </YearAndMonthWrapper>
      </DateWrapper>
      <AppTitle
        testId="header-day-name"
        role="header-day-name-role"
        title={convertedDate?.currentDay}
        fontWeight="100"
        fontSize="1.5vw"
      />
    </HeaderWrapper>
  );
};

export default Header;
