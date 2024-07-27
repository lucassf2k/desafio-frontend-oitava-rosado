import { render } from '@react-email/components';
import nodemailer from 'nodemailer';
import { Email } from '../../ui/components/email';

const transporter = nodemailer.createTransport({
  host: 'smtp.forwardemail.net',
  port: 465,
  secure: true,
  auth: {
    user: 'my_user',
    pass: 'my_password',
  },
});

type SendEmailType = {
  link: string;
  from: string;
  to: string;
  subject: string;
};

export async function SendEmail({ link, from, to, subject }: SendEmailType) {
  const emailHtml = render(<Email link={link} />);
  const options = {
    from,
    to,
    subject: subject,
    html: emailHtml,
  };
  await transporter.sendMail(options);
}
