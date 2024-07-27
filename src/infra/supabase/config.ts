import { createClient } from '@supabase/supabase-js';
import { envs } from '../configs/environment';

export const supabase = createClient(envs.SUPABASE_URL, envs.SUPABASE_API_URL);
