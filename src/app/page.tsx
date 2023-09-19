import { Button } from "@/components/Button";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

import SuggestionList from "@/components/SuggestionList";

export default async function Home() {

  const session = await getServerSession(authOptions)

  return (
    <>
      <div className="flex gap--sm">
        <aside className="sidebar">
          <div className="sidebar__banner">
            <h1>Frontend Mentor</h1>
            <p>Feedback Board</p>
          </div>
        </aside>
        <div className="flex flex-column flex-1">
          <header className="suggestion-header">
            <div className="container">
              {session?.user && (
                <Button>Add Feedback</Button>
              )}
            </div>
          </header>
          <main>
            <SuggestionList />
          </main>
        </div>
      </div>
    </>
  )
}
