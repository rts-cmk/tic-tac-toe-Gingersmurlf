import { press, animate } from "motion";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import GameState from "./GameState";

export default function Tile({
  className,
  value,
  onClick,
  playerTurn,
  gameState,
}) {
  let hoverClass = null;
  const element = useRef(null);
  if (value == null && playerTurn != null) {
    hoverClass = `${playerTurn.toLowerCase()}-hover`;
  }

  useEffect(() => {
        

      const cancelPress = press(element.current, (element) => {
        if (gameState !== GameState.inProgress || value !== null) {
            return;
        }
        
        animate(
          element,
          { scale: 0.5 },
          { duration: 0.1, easing: "ease-in-out" }
        );

        return () => {
          animate(element, { scale: 1 }, { duration: 0.5 });
        };
      });

      return () => cancelPress()
    
  }, [element, gameState, value]);

  return (
    <div
      ref={element}
      onClick={onClick}
      className={`tile ${className} ${hoverClass}`}
    >
      {value}
    </div>
  );
}
