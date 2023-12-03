import * as process from 'process';

export const mailConfig = {
    publicId: process.env.NEXT_PUBLIC_PUBLIC_ID || '',
    serviceId: process.env.NEXT_PUBLIC_SERVICE_ID || '',
    templateId: process.env.NEXT_PUBLIC_TEMPLATE_ID || ''
};
