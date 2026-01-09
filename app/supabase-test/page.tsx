import { createClient } from '@/utils/supabase/server'

export default async function Page() {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    const { count, error: tableError } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true })

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Supabase Connection Test</h1>
            <div className="space-y-2">
                <p><strong>Configured URL:</strong> {process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'Using Fallback'}</p>

                <div className="p-4 border rounded bg-white">
                    <h2 className="font-semibold mb-2">1. Auth Connection</h2>
                    <p>{error ? `❌ Error: ${error.message}` : '✅ Connected (Auth Service reachable)'}</p>
                </div>

                <div className="p-4 border rounded bg-white">
                    <h2 className="font-semibold mb-2">2. Users Table Check</h2>
                    <p>
                        {tableError
                            ? `❌ Error: ${tableError.message} (Did you run the SQL?)`
                            : `✅ Table 'public.users' exists (Row count: ${count})`
                        }
                    </p>
                </div>

                <details className="mt-4">
                    <summary className="cursor-pointer text-gray-500">Raw Debug Data</summary>
                    <pre className="bg-gray-100 p-2 rounded mt-2 overflow-auto text-xs">
                        {JSON.stringify({ auth: { data, error }, table: { count, tableError } }, null, 2)}
                    </pre>
                </details>
            </div>
        </div>
    )
}
