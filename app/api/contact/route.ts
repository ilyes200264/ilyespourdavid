import { NextRequest, NextResponse } from 'next/server';
// @ts-ignore
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { formType, ...formData } = body;

    // Compose email content based on formType
    let subject = 'New Contact Form Submission';
    let html = '';
    switch (formType) {
      case 'offer':
        subject = 'Nouvelle offre reçue';
        html = `
          <h2>Nouvelle offre reçue</h2>
          <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
            <tr><td><b>Prénom</b></td><td>${formData.prenom || formData.firstName || ''}</td></tr>
            <tr><td><b>Nom</b></td><td>${formData.nom || formData.lastName || ''}</td></tr>
            <tr><td><b>Adresse</b></td><td>${formData.adresse || formData.address || ''}</td></tr>
            <tr><td><b>Ville</b></td><td>${formData.ville || formData.city || ''}</td></tr>
            <tr><td><b>Province</b></td><td>${formData.province || ''}</td></tr>
            <tr><td><b>Code Postal</b></td><td>${formData.code_postal || formData.postalCode || ''}</td></tr>
            <tr><td><b>Téléphone</b></td><td>${formData.telephone || formData.phone || ''}</td></tr>
            <tr><td><b>Email</b></td><td>${formData.email || ''}</td></tr>
            <tr><td><b>Sujet</b></td><td>${formData.sujet || ''}</td></tr>
            <tr><td><b>Message</b></td><td>${formData.message || ''}</td></tr>
          </table>
        `;
        break;
      case 'newsletter':
        subject = 'Nouvelle inscription à la newsletter';
        html = `
          <h2>Nouvelle inscription à la newsletter</h2>
          <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
            <tr><td><b>Email</b></td><td>${formData.email || ''}</td></tr>
            <tr><td><b>Prénom</b></td><td>${formData.prenom || ''}</td></tr>
            <tr><td><b>Nom</b></td><td>${formData.nom || ''}</td></tr>
            <tr><td><b>Adresse</b></td><td>${formData.adresse || ''}</td></tr>
            <tr><td><b>Ville</b></td><td>${formData.ville || ''}</td></tr>
            <tr><td><b>Province</b></td><td>${formData.province || ''}</td></tr>
            <tr><td><b>Code Postal</b></td><td>${formData.code_postal || ''}</td></tr>
            <tr><td><b>Téléphone</b></td><td>${formData.telephone || ''}</td></tr>
            <tr><td><b>Sujet</b></td><td>${formData.sujet || ''}</td></tr>
            <tr><td><b>Message</b></td><td>${formData.message || ''}</td></tr>
          </table>
        `;
        break;
      case 'investor':
        subject = 'Nouveau formulaire investisseur';
        html = `
          <h2>Nouveau formulaire investisseur</h2>
          <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
            <tr><td><b>Prénom</b></td><td>${formData.prenom || formData.firstName || ''}</td></tr>
            <tr><td><b>Nom</b></td><td>${formData.nom || formData.lastName || ''}</td></tr>
            <tr><td><b>Email</b></td><td>${formData.email || ''}</td></tr>
            <tr><td><b>Téléphone</b></td><td>${formData.telephone || formData.phone || ''}</td></tr>
            <tr><td><b>Sujet</b></td><td>${formData.sujet || ''}</td></tr>
            <tr><td><b>Message</b></td><td>${formData.message || ''}</td></tr>
          </table>
        `;
        break;
      case 'contact':
        subject = 'Nouveau message de contact';
        html = `
          <h2>Nouveau message de contact</h2>
          <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
            <tr><td><b>Prénom</b></td><td>${formData.prenom || formData.firstName || ''}</td></tr>
            <tr><td><b>Nom</b></td><td>${formData.nom || formData.lastName || ''}</td></tr>
            <tr><td><b>Email</b></td><td>${formData.email || ''}</td></tr>
            <tr><td><b>Téléphone</b></td><td>${formData.telephone || formData.phone || ''}</td></tr>
            <tr><td><b>Sujet</b></td><td>${formData.sujet || formData.subject || ''}</td></tr>
            <tr><td><b>Message</b></td><td>${formData.message || ''}</td></tr>
            <tr><td><b>Consentement</b></td><td>${typeof formData.consent !== 'undefined' ? (formData.consent ? 'Oui' : 'Non') : ''}</td></tr>
          </table>
        `;
        break;
      case 'achat-terrains':
        subject = 'Nouvelle demande - Achat de terrain';
        html = `
          <h2>Nouvelle demande - Achat de terrain</h2>
          <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
            <tr><td><b>Prénom</b></td><td>${formData.firstName || ''}</td></tr>
            <tr><td><b>Nom</b></td><td>${formData.lastName || ''}</td></tr>
            <tr><td><b>Email</b></td><td>${formData.email || ''}</td></tr>
            <tr><td><b>Téléphone</b></td><td>${formData.phone || ''}</td></tr>
            <tr><td><b>Adresse</b></td><td>${formData.address || ''}</td></tr>
            <tr><td><b>Taille du terrain</b></td><td>${formData.size || ''}</td></tr>
            <tr><td><b>Zonage</b></td><td>${formData.zoning || ''}</td></tr>
            <tr><td><b>Description</b></td><td>${formData.description || ''}</td></tr>
          </table>
        `;
        break;
      case 'achat-multilogements':
        subject = 'Nouvelle demande - Achat de multilogements';
        html = `
          <h2>Nouvelle demande - Achat de multilogements</h2>
          <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
            <tr><td><b>Prénom</b></td><td>${formData.firstName || ''}</td></tr>
            <tr><td><b>Nom</b></td><td>${formData.lastName || ''}</td></tr>
            <tr><td><b>Email</b></td><td>${formData.email || ''}</td></tr>
            <tr><td><b>Téléphone</b></td><td>${formData.phone || ''}</td></tr>
            <tr><td><b>Adresse</b></td><td>${formData.address || ''}</td></tr>
            <tr><td><b>Nombre d’unités</b></td><td>${formData.units || ''}</td></tr>
            <tr><td><b>Revenu mensuel</b></td><td>${formData.revenue || ''}</td></tr>
            <tr><td><b>Situation actuelle</b></td><td>${formData.situation || ''}</td></tr>
          </table>
        `;
        break;
      case 'temoignage':
        subject = 'Nouveau témoignage reçu';
        html = `
          <h2>Nouveau témoignage</h2>
          <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
            <tr><td><b>Nom</b></td><td>${formData.name || ''}</td></tr>
            <tr><td><b>Localisation</b></td><td>${formData.location || ''}</td></tr>
            <tr><td><b>Note</b></td><td>${formData.rating || ''}</td></tr>
            <tr><td><b>Titre</b></td><td>${formData.title || ''}</td></tr>
            <tr><td><b>Témoignage</b></td><td>${formData.testimonial || ''}</td></tr>
          </table>
        `;
        break;
      default:
        html = `<pre>${JSON.stringify(formData, null, 2)}</pre>`;
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'contactwebsite988@gmail.com',
        pass: 'uzpz swow ueio zygd',
      },
    });

    // Send mail
    await transporter.sendMail({
      from: 'noreply@confortplus65.com',
      to: 'david.manianga@quoifaireavecmamaison.com',
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return NextResponse.json({ success: false, error: 'Erreur lors de l\'envoi du message.' }, { status: 500 });
  }
} 