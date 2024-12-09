export interface HistoricalResult {
  exercise: string;
  timestamp: number;
  color: string;
}

export const saveResult = (result: HistoricalResult) => {
  const history = getHistory();
  history.unshift(result);
  localStorage.setItem('exerciseHistory', JSON.stringify(history));
};

export const getHistory = (): HistoricalResult[] => {
  const history = localStorage.getItem('exerciseHistory');
  return history ? JSON.parse(history) : [];
};