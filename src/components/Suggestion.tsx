import Link from "next/link";
import Vote from "./Vote";

interface SuggestionProps {
  title: string;
  description: string;
  id: string;
}

const Suggestion: React.FC<SuggestionProps> = ({ title, description, id }) => {
  return (
    <Link style={{ textDecoration: 'none' }} href={`/feedback/${id}`}>
      <article className="suggestion">
        <Vote />
        <div className="flex flex-column">
          <h3 className="suggestion__title">{title}</h3>
          <p className="suggestion__description">{description}</p>
        </div>
      </article>
    </Link>
  )
}

export default Suggestion;