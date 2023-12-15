export const nodeStyle = {
  background: "#fff",
  color: "#333",
  border: "2px solid #0077FF",
  borderRadius: "4px",
  padding: "10px",
};

export const buttonStyle = {
  background: "#0077FF",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  padding: "10px 20px",
  cursor: "pointer",
  margin: "10px 0",
};

export const initialNodes = [
  {
    id: "1",
    type: "input",
    position: { x: 0, y: 0 },
    data: { label: "Получение Заявки (/консультация)" },
    style: nodeStyle,
  },
  {
    id: "2",
    type: "default",
    position: { x: 0, y: 100 },
    data: { label: "Выбор Способа Связи " },
    style: {
      ...nodeStyle,
      borderRadius: "50px",
    },
  },
  {
    id: "3",
    position: { x: -150, y: 200 },
    data: { label: "Напишите мне" },
    style: nodeStyle,
  },
  {
    id: "4",
    position: { x: 150, y: 200 },
    data: { label: "Позвоните мне" },
    style: nodeStyle,
  },
  {
    id: "5",
    position: { x: 0, y: 300 },
    data: { label: "Обработка и Отправка Лида" },
    style: nodeStyle,
  },
  {
    id: "6",
    position: { x: 0, y: 400 },
    data: { label: "Сохранение в Базу Данных" },
    style: nodeStyle,
  },
];

export const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    style: { stroke: "#ff0066" },
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    animated: true,
    style: { stroke: "#ff0066" },
  },
  { id: "e3-5", source: "3", target: "5" },
  { id: "e4-5", source: "4", target: "5" },
  { id: "e5-6", source: "5", target: "6" },
];
