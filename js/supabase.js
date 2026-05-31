const SUPABASE_URL = 'https://akdvgipbbkoxkkuglamf.supabase.co';
const SUPABASE_KEY = 'sb_publishable_N5u1pbHrgKnOJx0NKMNS2A_L_kzEWQy';
const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);
async function getCurrentUser() {
  const { data: { session } } = await db.auth.getSession();
  if (!session) return null;
  const { data } = await db
    .from('users')
    .select('*')
    .eq('id', session.user.id)
    .single();
  return data;
}
async function requireAuth() {
  const user = await getCurrentUser();
  if (!user) window.location.href = 'login.html';
  return user;
}
async function logout() {
  await db.auth.signOut();
  window.location.href = 'index.html';
}