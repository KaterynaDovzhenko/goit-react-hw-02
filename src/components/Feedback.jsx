export default function Feedback({
  feedbackItem,
  totalFeedbackItem,
  positiveFeedbackItem,
}) {
  return (
    <ul>
      <li>
        <p>Good:{feedbackItem.good}</p>
      </li>
      <li>
        <p>Neutral:{feedbackItem.neutral}</p>
      </li>
      <li>
        <p>Bad:{feedbackItem.bad}</p>
      </li>
      <li>
        <p>Total:{totalFeedbackItem}</p>
      </li>
      <li>
        <p>Positive:{positiveFeedbackItem}%</p>
      </li>
    </ul>
  );
}
