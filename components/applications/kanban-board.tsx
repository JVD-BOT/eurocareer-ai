"use client";

import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable, type DropResult } from "@hello-pangea/dnd";
import type { Application, ApplicationStatus } from "@/lib/types";
import { COLUMNS, COUNTRIES } from "@/lib/constants";

interface KanbanBoardProps {
  applications: Application[];
  onStatusChange: (id: string, newStatus: ApplicationStatus, oldStatus: ApplicationStatus) => void;
  onCardClick: (app: Application) => void;
}

export function KanbanBoard({ applications, onStatusChange, onCardClick }: KanbanBoardProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;
    onStatusChange(
      draggableId,
      destination.droppableId as ApplicationStatus,
      source.droppableId as ApplicationStatus
    );
  };

  if (!mounted) {
    return (
      <div className="flex gap-4 overflow-x-auto pb-4">
        {COLUMNS.map((col) => (
          <div key={col.id} className="flex-shrink-0 w-[272px] h-40 rounded-lg bg-gray-100 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex gap-3 overflow-x-auto pb-6 min-h-[calc(100vh-220px)]">
        {COLUMNS.map((column) => {
          const colApps = applications.filter((a) => a.status === column.id);
          return (
            <div key={column.id} className="flex-shrink-0 w-[272px] flex flex-col">
              {/* Column header */}
              <div
                className={`flex items-center justify-between px-3 py-2.5 rounded-t-xl ${column.headerBg} border ${column.borderColor} border-b-0`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${column.dotColor}`} />
                  <span className={`text-sm font-semibold ${column.headerText}`}>{column.label}</span>
                </div>
                <span
                  className={`text-xs font-semibold ${column.headerText} bg-white/70 rounded-full px-2 py-0.5 min-w-[1.5rem] text-center`}
                >
                  {colApps.length}
                </span>
              </div>

              {/* Drop zone */}
              <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`flex-1 p-2 border ${column.borderColor} border-t-0 rounded-b-xl transition-colors duration-150 ${
                      snapshot.isDraggingOver ? column.dragBg : "bg-gray-50"
                    }`}
                  >
                    {colApps.map((app, index) => (
                      <Draggable key={app.id} draggableId={app.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`mb-2 transition-transform ${snapshot.isDragging ? "rotate-1 scale-[1.02] shadow-lg" : ""}`}
                            onClick={() => !snapshot.isDragging && onCardClick(app)}
                          >
                            <ApplicationCard app={app} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                    {colApps.length === 0 && !snapshot.isDraggingOver && (
                      <div className="h-16 flex items-center justify-center text-xs text-gray-400 border-2 border-dashed border-gray-200 rounded-lg">
                        Drop here
                      </div>
                    )}
                  </div>
                )}
              </Droppable>
            </div>
          );
        })}
      </div>
    </DragDropContext>
  );
}

function ApplicationCard({ app }: { app: Application }) {
  const country = COUNTRIES.find((c) => c.code === app.country);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 cursor-pointer hover:border-blue-300 hover:shadow-sm transition-all select-none">
      <div className="flex items-start justify-between gap-1 mb-1">
        <p className="font-semibold text-sm text-gray-900 line-clamp-1 flex-1">{app.company_name}</p>
        {country && <span className="text-base leading-none flex-shrink-0">{country.flag}</span>}
      </div>
      <p className="text-xs text-gray-500 line-clamp-1 mb-2">{app.role_title}</p>
      <div className="flex items-center justify-between gap-2">
        {app.applied_date ? (
          <span className="text-xs text-gray-400">
            {new Date(app.applied_date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        ) : (
          <span />
        )}
        {app.visa_sponsorship && (
          <span className="text-xs bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-2 py-0.5 font-medium whitespace-nowrap">
            🛂 Visa
          </span>
        )}
      </div>
    </div>
  );
}
