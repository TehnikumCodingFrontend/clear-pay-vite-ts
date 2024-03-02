import "./MonthlyStats.scss";

export const MonthlyStats = () => {
  return (
  <div className="MonthlyStats">
    <h2>Статистика за месяц</h2>
    <div className="stats_elems_wrapper">
      <div className="stats_item">
        <span className="stat_number">30</span>
        <span className="stat_type">Переводов <br /> на карту</span>
      </div>
      <div className="stats_item">
        <span className="stat_number">17</span>
        <span className="stat_type">Конверсий <br /> валют</span>
      </div>
      <div className="stats_item">
        <span className="stat_number">23</span>
        <span className="stat_type">Зачисления на<br /> карту</span>
      </div>
      <div className="stats_item">
        <span className="stat_number">12</span>
        <span className="stat_type">Проведенных<br /> платежей</span>
      </div>
    </div>
  </div>
  );
};
