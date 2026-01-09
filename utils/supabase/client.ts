import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://sylkptkvwwnkbrpndwtn.supabase.co',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5bGtwdGt2d3dua2JycG5kd3RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5MDYwMDMsImV4cCI6MjA4MzQ4MjAwM30.I1JVVsKhm1t93C_sXcHzbv3xyNS0Gpjj4zB8gyfRsdc'
    )
}
