export default function Progresstracker({ tasks }) {

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;

  const percent = total === 0 ? 0 : (completed / total) * 100;

  return (
    <div className="progress-tracker">

      {/* TEXT INFO */}
      <div className="progress-text">
        <span>{completed} / {total} Tasks Completed</span>
        <span>{Math.round(percent)}%</span>
      </div>

      {/* BAR */}
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${percent}%` }}
        />
      </div>

    </div>
  );
}