import { SignInForm, SignOutButton } from "@/routes"
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react"
import { api } from "../../convex/_generated/api"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl gap-4 bg-blue-950 p-4 md:p-8">
      <h1 className="text-center text-4xl font-bold">
        Convex + React + Convex Auth
      </h1>
      <Authenticated>
        <HomePageContent />
      </Authenticated>
      <Unauthenticated>
        <SignInForm />
      </Unauthenticated>
    </div>
  )
}

function HomePageContent() {
  const { viewer, numbers } =
    useQuery(api.myFunctions.listNumbers, {
      count: 10,
    }) ?? {}
  const addNumber = useMutation(api.myFunctions.addNumber)

  if (viewer === undefined || numbers === undefined) {
    return (
      <div className="mx-auto">
        <p>loading... (consider a loading skeleton)</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 bg-yellow-900 p-4">
      <p>Welcome {viewer ?? "Anonymous"}!</p>
      <p>
        Click the button below and open this page in another window - this data
        is persisted in the Convex cloud database!
      </p>
      <p>
        <button
          className="bg-primary text-primary-foreground rounded-md border-2 px-4 py-2 text-sm"
          onClick={() => {
            void addNumber({ value: Math.floor(Math.random() * 10) })
          }}
        >
          Add a random number
        </button>
      </p>
      <p>
        Numbers:{" "}
        {numbers?.length === 0
          ? "Click the button!"
          : (numbers?.join(", ") ?? "...")}
      </p>
      <ResourceSection />
      <SignOutButton />
    </div>
  )
}

function ResourceSection() {
  return (
    <aside className="space-y-4 bg-orange-900 p-4">
      <p>
        Edit{" "}
        <code className="bg-card rounded-md px-1 py-0.5 font-mono text-sm font-bold">
          convex/myFunctions.ts
        </code>{" "}
        to change your backend
      </p>
      <p>
        Edit{" "}
        <code className="bg-card rounded-md px-1 py-0.5 font-mono text-sm font-bold">
          src/App.tsx
        </code>{" "}
        to change your frontend
      </p>
      <div className="flex flex-col">
        <p className="text-lg font-bold">Useful resources:</p>
        <div className="flex gap-2">
          <div className="flex w-1/2 flex-col gap-4">
            <ResourceCard
              title="Convex docs"
              description="Read comprehensive documentation for all Convex features."
              href="https://docs.convex.dev/home"
            />
            <ResourceCard
              title="TypeScript Handbook"
              description="Master TypeScript with comprehensive documentation and examples."
              href="https://www.typescriptlang.org/docs/handbook/intro.html"
            />
            <ResourceCard
              title="React DevTools"
              description="Install React DevTools browser extension for debugging."
              href="https://react.dev/learn/react-developer-tools"
            />
            <ResourceCard
              title="Vite Guide"
              description="Learn about Vite's features and configuration options."
              href="https://vitejs.dev/guide/"
            />
            <ResourceCard
              title="Tailwind CSS"
              description="Utility-first CSS framework for rapid UI development."
              href="https://tailwindcss.com/docs"
            />
            <ResourceCard
              title="React Router"
              description="Declarative routing for React applications."
              href="https://reactrouter.com/en/main/start/overview"
            />
            <ResourceCard
              title="Convex Auth"
              description="Authentication for Convex applications made simple."
              href="https://docs.convex.dev/production/authentication"
            />
            <ResourceCard
              title="React Tutorial"
              description="Learn React from the ground up with interactive examples."
              href="https://react.dev/learn"
            />
            <ResourceCard
              title="Node.js Docs"
              description="Official Node.js documentation and API reference."
              href="https://nodejs.org/en/docs"
            />
            <ResourceCard
              title="ESLint Guide"
              description="Pluggable JavaScript linter for identifying patterns."
              href="https://eslint.org/docs/latest/"
            />
          </div>
          <div className="flex w-1/2 flex-col gap-4">
            <ResourceCard
              title="Templates"
              description="Browse our collection of templates to get started quickly."
              href="https://www.convex.dev/templates"
            />
            <ResourceCard
              title="Discord"
              description="Join our developer community to ask questions, trade tips and tricks, and show off your projects."
              href="https://www.convex.dev/community"
            />
            <ResourceCard
              title="GitHub Examples"
              description="Explore example projects and starter templates."
              href="https://github.com/get-convex"
            />
            <ResourceCard
              title="Performance Guide"
              description="Optimize your Convex application for production."
              href="https://docs.convex.dev/production/performance"
            />
            <ResourceCard
              title="Deployment"
              description="Deploy your Convex app to production environments."
              href="https://docs.convex.dev/production/deployment"
            />
            <ResourceCard
              title="Testing"
              description="Testing strategies and best practices for Convex apps."
              href="https://docs.convex.dev/testing"
            />
            <ResourceCard
              title="Monitoring"
              description="Monitor your application's performance and errors."
              href="https://docs.convex.dev/production/monitoring"
            />
            <ResourceCard
              title="Security"
              description="Security best practices for Convex applications."
              href="https://docs.convex.dev/production/security"
            />
            <ResourceCard
              title="MDN Web Docs"
              description="Comprehensive web development documentation and tutorials."
              href="https://developer.mozilla.org/"
            />
            <ResourceCard
              title="Can I Use"
              description="Browser support tables for modern web technologies."
              href="https://caniuse.com/"
            />
          </div>
        </div>
      </div>
    </aside>
  )
}

function ResourceCard({
  title,
  description,
  href,
}: {
  title: string
  description: string
  href: string
}) {
  return (
    <div className="bg-card flex h-36 flex-col gap-2 overflow-auto rounded-md px-4 py-8">
      <a href={href} className="text-sm underline hover:no-underline">
        {title}
      </a>
      <p className="text-xs">{description}</p>
    </div>
  )
}
