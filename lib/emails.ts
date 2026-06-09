import { Resend } from "resend";

const FROM = "EuroCareerAI <hello@eurocareerai.com>";

function client() {
  return new Resend(process.env.RESEND_API_KEY!);
}

const wrap = (content: string) => `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body style="margin:0;padding:0;background:#FAFAFA;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0F172A;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FAFAFA;padding:40px 20px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#FFFFFF;border-radius:12px;border:1px solid #E2E8F0;">
            <tr>
              <td style="padding:28px 40px 20px 40px;border-bottom:1px solid #F0F0EC;">
                <p style="margin:0;font-size:14px;font-weight:700;color:#6366F1;letter-spacing:0.04em;">EuroCareerAI</p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 40px 36px 40px;font-size:15px;line-height:1.65;color:#1E293B;">
                ${content}
              </td>
            </tr>
          </table>
          <p style="margin:20px 0 0;font-size:12px;color:#64748B;">EuroCareerAI &middot; eurocareerai.com</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;

const cta = (href: string, label: string) =>
  `<a href="${href}" style="display:inline-block;background:#6366F1;color:#FFFFFF;text-decoration:none;font-weight:600;font-size:15px;padding:12px 24px;border-radius:8px;">${label}</a>`;

export function welcomeEmail() {
  const html = wrap(`
    <h1 style="margin:0 0 16px;font-size:22px;font-weight:700;color:#0F172A;line-height:1.3;">Welcome to EuroCareerAI &mdash; start here</h1>
    <p style="margin:0 0 16px;">You've got <strong>3 free AI generations</strong> this month. Here's how to make them count:</p>
    <ol style="margin:0 0 20px;padding-left:22px;">
      <li style="margin-bottom:8px;">Paste your CV and adapt it for any EU country</li>
      <li style="margin-bottom:8px;">Add a job and generate a tailored cover letter</li>
      <li style="margin-bottom:8px;">Track everything on your Kanban board</li>
    </ol>
    <p style="margin:0 0 24px;">Most users start with the CV Adapter &mdash; it takes 30 seconds.</p>
    <p style="margin:0;">${cta("https://eurocareerai.com/applications", "Adapt your CV now &rarr;")}</p>
  `);
  return { subject: "Welcome to EuroCareerAI — start here", html };
}

export function day2Email(remaining: number) {
  const html = wrap(`
    <h1 style="margin:0 0 16px;font-size:22px;font-weight:700;color:#0F172A;line-height:1.3;">Your CV might be costing you interviews in Europe</h1>
    <p style="margin:0 0 16px;">Did you know German employers expect a photo on your CV? Dutch recruiters prefer a direct, collaborative tone. Every EU country has different rules.</p>
    <p style="margin:0 0 16px;">Our AI adapts your CV automatically for any of 12 European markets.</p>
    <p style="margin:0 0 24px;">You have <strong>${remaining} free AI generations</strong> left this month.</p>
    <p style="margin:0;">${cta("https://eurocareerai.com/applications", "Try the CV Adapter &rarr;")}</p>
  `);
  return { subject: "Your CV might be costing you interviews in Europe", html };
}

export function day7Email(remaining: number) {
  const html = wrap(`
    <h1 style="margin:0 0 16px;font-size:22px;font-weight:700;color:#0F172A;line-height:1.3;">You have free AI generations expiring</h1>
    <p style="margin:0 0 16px;">You still have <strong>${remaining} free AI generations</strong> this month.</p>
    <p style="margin:0 0 24px;">The most popular countries: Germany, Netherlands, and France. Each has different CV rules &mdash; our AI handles all of them.</p>
    <p style="margin:0 0 16px;">${cta("https://eurocareerai.com/applications", "Use your free generations &rarr;")}</p>
    <p style="margin:0;font-size:13px;color:#64748B;">Want unlimited? <a href="https://eurocareerai.com/settings/billing" style="color:#6366F1;text-decoration:none;">Upgrade to Pro for &euro;9/month</a></p>
  `);
  return { subject: "You have free AI generations expiring", html };
}

export function reactivationEmail() {
  const html = wrap(`
    <p style="margin:0 0 16px;">Hi,</p>
    <p style="margin:0 0 16px;">Quick note from the team behind EuroCareerAI.</p>
    <p style="margin:0 0 16px;">If you tried the CV adapter or cover letter generator a few weeks back and it threw an error, sorry about that. There was a bug that stopped the AI features from running. It's fixed now, and everything's working the way it should.</p>
    <p style="margin:0 0 16px;">So if you signed up and didn't get to properly try it, now's a good time. Your free generations are ready to go:</p>
    <ul style="margin:0 0 20px;padding-left:22px;">
      <li style="margin-bottom:8px;">Adapt your CV to any of 12 EU country formats</li>
      <li style="margin-bottom:8px;">Generate cover letters that actually sound human</li>
      <li style="margin-bottom:8px;">Track your applications in one place</li>
    </ul>
    <p style="margin:0 0 24px;">${cta("https://eurocareerai.com/applications", "Try it now")}</p>
    <p style="margin:0 0 16px;">You get 3 free AI generations a month. If you end up using it a lot, Pro is &euro;9/month for unlimited, but the free tier is plenty to see if it's useful.</p>
    <p style="margin:0 0 16px;">Any issues or feedback, just reply to this email and it'll come through to us.</p>
    <p style="margin:0;">Cheers,<br />EuroCareerAI</p>
  `);
  return { subject: "the AI tools are working properly now", html };
}

export async function sendEmail(opts: { to: string; subject: string; html: string }) {
  return client().emails.send({
    from: FROM,
    to: opts.to,
    subject: opts.subject,
    html: opts.html,
  });
}
