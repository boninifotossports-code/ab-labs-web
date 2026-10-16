    // src/app/actions.ts
'use server'

import { sql } from '@vercel/postgres';

export async function salvarLead(formData: FormData) {
  const nome = formData.get('nome') as string;
  const email = formData.get('email') as string;
  const whatsapp = formData.get('whatsapp') as string;
  const tipo_sistema = formData.get('tipo_sistema') as string;
  const mensagem = formData.get('mensagem') as string;

  if (!nome || !email || !whatsapp) {
    return { success: false, error: 'Preencha todos os campos obrigatórios.' };
  }

  try {
    await sql`
      INSERT INTO leads_contato (nome, email, whatsapp, tipo_sistema, mensagem)
      VALUES (${nome}, ${email}, ${whatsapp}, ${tipo_sistema}, ${mensagem});
    `;
    return { success: true };
  } catch (error) {
    console.error('Erro ao salvar no Vercel Postgres:', error);
    return { success: false, error: 'Erro ao enviar solicitação. Tente novamente.' };
  }
}