"use client";

import { ClockContext } from "@/app/context";
import { CornerLed } from "./styles"
import { useCallback, useContext, useEffect, useState } from "react";
import clsx from "clsx";
import ClockWrapper from "../clockWrapper";
import { clockLayout } from "@/app/util/clockLayout";

const Clock = () => {
  const [clockText, setClockText] = useState<(string | boolean)[][][]>(clockLayout.map((row) =>
    row.split("").map((char) => [char, false])
  ));

  // Function to get the current time
  const getCurrentTime = () => {
    const now = new Date();

    let hour = now.getHours() % 12,
      minute = Math.round(now.getMinutes() / 5) * 5;

    if (minute === 60) {
      minute = 0;
      hour = (hour + 1) % 12;
    }

    return {
      hour,
      minute,
    };
  };

  // Function to update the clock display
  const updateClock = useCallback(() => {
    let { hour, minute } = getCurrentTime();

    // Mapping words to their positions in the clock layout
    const wordPositions = new Map([
      ["IT", [0, 0, 0, 1]],
      ["IS", [0, 3, 0, 4]],
      ["A", [1, 0, 1, 0]],
      ["QUARTER", [1, 2, 1, 8]],
      ["TWENTY", [2, 0, 2, 5]],
      ["FIVE1", [2, 7, 2, 10]],
      ["HALF", [3, 0, 3, 3]],
      ["TEN1", [3, 5, 3, 7]],
      ["TO", [3, 9, 3, 10]],
      ["PAST", [4, 0, 4, 3]],
      ["NINE", [4, 7, 4, 10]],
      ["ONE", [5, 0, 5, 2]],
      ["SIX", [5, 3, 5, 5]],
      ["THREE", [5, 6, 5, 10]],
      ["FOUR", [6, 0, 6, 3]],
      ["FIVE2", [6, 4, 6, 7]],
      ["TWO", [6, 8, 6, 10]],
      ["EIGHT", [7, 0, 7, 4]],
      ["ELEVEN", [7, 5, 7, 10]],
      ["SEVEN", [8, 0, 8, 4]],
      ["TWELVE", [8, 5, 8, 10]],
      ["TEN2", [9, 0, 9, 2]],
      ["OCLOCK", [9, 5, 9, 10]],
    ]);

    const hourWords: { [index: number]: string } = {
      0: "TWELVE",
      1: "ONE",
      2: "TWO",
      3: "THREE",
      4: "FOUR",
      5: "FIVE2",
      6: "SIX",
      7: "SEVEN",
      8: "EIGHT",
      9: "NINE",
      10: "TEN2",
      11: "ELEVEN",
      12: "TWELVE",
    };

    let finalText = "IT IS ";

    // Switch to determine the text for each minute interval
    switch (minute) {
      case 5:
        finalText += "FIVE1 PAST ";
        break;
      case 10:
        finalText += "TEN1 PAST ";
        break;
      case 15:
        finalText += "A QUARTER PAST ";
        break;
      case 20:
        finalText += "TWENTY PAST ";
        break;
      case 25:
        finalText += "TWENTY FIVE1 PAST ";
        break;
      case 30:
        finalText += "HALF PAST ";
        break;
      case 35:
        finalText += "TWENTY FIVE1 TO ";
        break;
      case 40:
        finalText += "TWENTY TO ";
        break;
      case 45:
        finalText += "A QUARTER TO ";
        break;
      case 50:
        finalText += "TEN1 TO ";
        break;
      case 55:
        finalText += "FIVE1 TO ";
        break;
      default:
        break;
    }

    if (minute > 30) {
      hour = (hour + 1) % 12 ? (hour + 1) % 12 : 12;
    }

    finalText += hourWords[hour];

    if (minute === 0) {
      finalText += " OCLOCK";
    }

    // Creating the clock matrix
    const clockMatrix = clockLayout.map((row) =>
      row.split("").map((char) => [char, false])
    );

    // Highlighting the words in the clock matrix
    finalText.split(" ").forEach((word) => {
      const [startRow, startCol, endRow, endCol] = wordPositions.get(word) as number[];
      for (let i = startRow; i <= endRow; i++) {
        for (let j = startCol; j <= endCol; j++) {
          clockMatrix[i][j] = [clockLayout[i].charAt(j), true];
        }
      }
    });

    setClockText(clockMatrix);
  }, []);

  useEffect(() => {
    // Update the clock every second
    const clockTimer = setInterval(updateClock, 3000);

    return () => {
      clearInterval(clockTimer);
    };
  }, [updateClock]);

  const { texture, ledColor } = useContext(ClockContext);

  return (
    <div className="relative m-auto">
      <ClockWrapper img={texture}>
        <>
          {
            clockText?.map(row => {
              return row.map(([char, highlight], index) => {
                return (
                  <span key={index} className={`
                    ${clsx({
                    "md:text-3xl sm:text-xl font-word-clock ": true,
                    "text-yellow-100 text-shadow-clock-on-yellow": highlight && ledColor === "yellow",
                    "text-white text-shadow-clock-on-white": highlight && ledColor === "white",
                    "text-black/50 text-shadow-clock-off": !highlight
                  })}`}>
                    {char}
                  </span>
                );
              })
            })
          }
        </>
      </ClockWrapper>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-between p-6 z-10">
        <CornerLed className="top-6 left-6" />
        <CornerLed className="top-6 right-6" />
        <CornerLed className="bottom-6 right-6" />
        <CornerLed className="bottom-6 left-6" />
      </div>
    </div>
  );
};

export default Clock;