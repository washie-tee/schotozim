import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="page">
      <div class="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us for admissions, inquiries, or any other questions.</p>
      </div>
      
      <div class="contact-info">
        <div class="contact-details">
          <h2>Contact Information</h2>
          <div class="contact-item">
            <strong>Email:</strong> info@schoto.ac.zw
          </div>
          <div class="contact-item">
            <strong>Phone:</strong> +263 292 2258174
          </div>
          <div class="contact-item">
            <strong>Address:</strong> School of Hospitality & Tourism, Zimbabwe
          </div>
        </div>
        
        <div class="office-hours">
          <h2>Office Hours</h2>
          <div class="hours-item">
            <strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM
          </div>
          <div class="hours-item">
            <strong>Saturday:</strong> 9:00 AM - 1:00 PM
          </div>
          <div class="hours-item">
            <strong>Sunday:</strong> Closed
          </div>
        </div>
      </div>
    </section>`,
  styles: [`
    .page {
      padding: 2rem 1rem;
      max-width: 1000px;
      margin: 0 auto;
    }
    
    .contact-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .contact-header h1 {
      font-size: 2.5rem;
      color: #8b4513;
      margin-bottom: 1rem;
    }
    
    .contact-header p {
      font-size: 1.2rem;
      color: #666;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .contact-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      margin-top: 2rem;
    }
    
    .contact-details h2,
    .office-hours h2 {
      color: #8b4513;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
    }
    
    .contact-item,
    .hours-item {
      margin-bottom: 1rem;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 0.5rem;
      border-left: 4px solid #8b4513;
    }
    
    .contact-item strong,
    .hours-item strong {
      color: #333;
      display: inline-block;
      min-width: 100px;
    }
    
    @media (max-width: 768px) {
      .contact-info {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .contact-header h1 {
        font-size: 2rem;
      }
      
      .page {
        padding: 1rem;
      }
    }
  `]
})
export class ContactComponent {}