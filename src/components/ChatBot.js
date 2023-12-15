import React, { useCallback, useState } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import { initialNodes, initialEdges, buttonStyle } from "./FlowData";

function ChatBot() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [phoneNumber, setPhoneNumber] = useState("");

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
   
  // Сохранение в базу данных
  const handleSave = async () => {
    const dataToSave = {
      date: new Date().toISOString().split("T")[0],
      time: new Date().toISOString().split("T")[1].split(".")[0],
      username: "Имя пользователя",
      phoneNumber: phoneNumber,
      action: true,
    };

    try {
      const response = await fetch("http://localhost:3001/save-customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSave),
      });

      if (response.ok) {
        console.log("Данные успешно сохранены");
      } else {
        const errorText = await response.text();
        console.error("Ошибка при сохранении данных:", errorText);
      }
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div style={{ height: 600 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
      <input
        type="text"
        placeholder="Введите номер WhatsApp"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        style={{ margin: "10px 0", padding: "10px" }}
      />
      <button onClick={handleSave} style={buttonStyle}>
        Сохранить
      </button>
    </div>
  );
}

export default ChatBot;
