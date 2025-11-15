export default function UnauthorizedPage() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="text-card-foreground mt-6 text-center text-3xl font-extrabold">
            Access Denied
          </h2>
          <p className="text-muted-foreground mt-2 text-center text-sm">
            You don't have permission to access this page
          </p>
        </div>
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            Please contact your administrator if you believe this is an error.
          </p>
        </div>
      </div>
    </div>
  )
}
