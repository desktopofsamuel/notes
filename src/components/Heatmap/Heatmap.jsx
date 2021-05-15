import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "./heatmap.css";
// import "react-calendar-heatmap/dist/styles.css";

const Heatmap = ({ data }: Props) => {
  Date.prototype.addDays = function(days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  Date.prototype.minusDays = function(days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() - days);
    return date;
  };

  return (
    <CalendarHeatmap
      startDate={new Date().minusDays(100)}
      endDate={new Date().addDays(25)}
      showWeekdayLabels
      showOutOfRangeDays
      gutterSize={0.5}
      tooltipDataAttrs={(value) => {
        return { "data-tooltip": "Tooltip: " + value.date };
      }}
      values={data}
      monthLabels={[
        "Jan.",
        "Feb.",
        "Mar.",
        "Apr.",
        "May",
        "Jun.",
        "Jul.",
        "Aug.",
        "Sep.",
        "Oct.",
        "Nov.",
        "Dec.",
      ]}
      weekdayLabels={["S", "M", "T", "W", "T", "F", "S"]}
      classForValue={(value) => {
        if (!value) {
          return "color-empty";
        }
        if (value.count == 0) {
          return `color-empty`;
        }
        if (value.count >= 0) {
          return "color-filled";
        }
      }}
    />
  );
};

export default Heatmap;
