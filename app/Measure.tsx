import { Fragment } from "react";

// Renders content strings: **key words** become bold, and measurements
// (percentages, counts, costs, ratios) are set in the data face.
// Bare years are left alone: they are dates, not measurements.
const NUMBER = /((?<![A-Za-z\d.])\$?\d+(?:,\d{3})*(?:\.\d+)?(?:%|×| g\/g)?(?![A-Za-z]))/g;
const YEAR = /^(19|20)\d\d$/;
const BOLD = /\*\*(.+?)\*\*/g;

function Numbers({ text }: { text: string }) {
  return (
    <>
      {text.split(NUMBER).map((part, i) =>
        i % 2 === 1 && !YEAR.test(part) ? (
          <span className="data" key={i}>
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}

export default function Measure({ text }: { text: string }) {
  return (
    <>
      {text.split(BOLD).map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i}>
            <Numbers text={part} />
          </strong>
        ) : (
          <Numbers key={i} text={part} />
        )
      )}
    </>
  );
}
