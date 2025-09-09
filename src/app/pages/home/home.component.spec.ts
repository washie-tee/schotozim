import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideZonelessChangeDetection } from '@angular/core';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Hero Section', () => {
    it('should display hero content with correct title and actions', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const heroTitle = compiled.querySelector('.hero-content h1');
      const heroActions = compiled.querySelectorAll('.hero-actions .btn');

      expect(heroTitle?.textContent).toContain('Shape Your Future in Hospitality & Tourism');
      expect(heroActions.length).toBe(2);
      expect(heroActions[0].textContent?.trim()).toBe('Apply Now');
      expect(heroActions[1].textContent?.trim()).toBe('Contact Us');
    });
  });

  describe('About Section', () => {
    it('should display about section with image collage and content', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const aboutSection = compiled.querySelector('#about');
      const aboutCollage = compiled.querySelector('.about-images-collage');
      const collageImages = compiled.querySelectorAll('.about-images-collage img');
      const aboutTitle = compiled.querySelector('.about-text h2');

      expect(aboutSection).toBeTruthy();
      expect(aboutCollage).toBeTruthy();
      expect(collageImages.length).toBe(3);
      expect(aboutTitle?.textContent).toContain('About Us');
    });

    it('should have proper image classes in collage', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const mainImage = compiled.querySelector('.collage-main');
      const topImage = compiled.querySelector('.collage-top');
      const bottomImage = compiled.querySelector('.collage-bottom');

      expect(mainImage).toBeTruthy();
      expect(topImage).toBeTruthy();
      expect(bottomImage).toBeTruthy();
    });
  });

  describe('Programmes Section', () => {
    it('should display all 4 programme cards', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const programmeCards = compiled.querySelectorAll('#programmes .card');
      const programmeTitles = compiled.querySelectorAll('#programmes .card h3');

      expect(programmeCards.length).toBe(4);
      expect(programmeTitles[0].textContent).toContain('Tourism & Hospitality Management');
      expect(programmeTitles[1].textContent).toContain('Professional Cookery & Culinary Arts');
      expect(programmeTitles[2].textContent).toContain('Food & Beverage Management');
      expect(programmeTitles[3].textContent).toContain('Baking & Confectionery Management');
    });
  });

  describe('Facilities Gallery', () => {
    it('should display facilities section with gallery grid', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const facilitiesSection = compiled.querySelector('#facilities');
      const facilitiesTitle = compiled.querySelector('#facilities .section-title');
      const facilitiesIntro = compiled.querySelector('.facilities-intro');
      const galleryItems = compiled.querySelectorAll('.gallery-item');

      expect(facilitiesSection).toBeTruthy();
      expect(facilitiesTitle?.textContent).toContain('Our Facilities');
      expect(facilitiesIntro?.textContent).toContain('Explore our state-of-the-art facilities');
      expect(galleryItems.length).toBe(9);
    });

    it('should have gallery items with images and overlays', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const galleryItems = compiled.querySelectorAll('.gallery-item');
      
      galleryItems.forEach((item, index) => {
        const image = item.querySelector('img');
        const overlay = item.querySelector('.gallery-overlay');
        const overlayTitle = item.querySelector('.gallery-overlay h3');
        const overlayText = item.querySelector('.gallery-overlay p');

        expect(image).toBeTruthy();
        expect(overlay).toBeTruthy();
        expect(overlayTitle).toBeTruthy();
        expect(overlayText).toBeTruthy();
      });
    });
  });

  describe('News & Events Section', () => {
    it('should display news and events section with correct title and intro', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const newsSection = compiled.querySelector('#news-events');
      const newsTitle = compiled.querySelector('#news-events .section-title');
      const newsIntro = compiled.querySelector('.news-intro');

      expect(newsSection).toBeTruthy();
      expect(newsTitle?.textContent).toContain('News & Events');
      expect(newsIntro?.textContent).toContain('Stay updated with the latest happenings');
    });

    it('should display exactly 6 news cards', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const newsCards = compiled.querySelectorAll('.news-card');

      expect(newsCards.length).toBe(6);
    });

    it('should have properly structured news cards with dates and content', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const newsCards = compiled.querySelectorAll('.news-card');

      newsCards.forEach((card, index) => {
        const dateSection = card.querySelector('.news-date');
        const dateDay = card.querySelector('.date-day');
        const dateMonth = card.querySelector('.date-month');
        const dateYear = card.querySelector('.date-year');
        const newsContent = card.querySelector('.news-content');
        const newsTitle = card.querySelector('.news-content h3');
        const newsDescription = card.querySelector('.news-content p');
        const newsLink = card.querySelector('.news-link');

        expect(dateSection).toBeTruthy();
        expect(dateDay).toBeTruthy();
        expect(dateMonth).toBeTruthy();
        expect(dateYear).toBeTruthy();
        expect(newsContent).toBeTruthy();
        expect(newsTitle).toBeTruthy();
        expect(newsDescription).toBeTruthy();
        expect(newsLink).toBeTruthy();
        expect(newsLink?.textContent?.trim()).toBe('Read More');
      });
    });

    it('should display correct news event titles and dates', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const newsCards = compiled.querySelectorAll('.news-card');
      
      const expectedEvents = [
        { day: '15', month: 'Dec', year: '2024', title: 'Annual Graduation Ceremony' },
        { day: '20', month: 'Jan', year: '2025', title: 'New Culinary Workshop Series' },
        { day: '05', month: 'Feb', year: '2025', title: 'Industry Partnership Program' },
        { day: '12', month: 'Mar', year: '2025', title: 'Annual Food Festival' },
        { day: '18', month: 'Apr', year: '2025', title: 'Tourism Conference 2025' },
        { day: '25', month: 'May', year: '2025', title: 'Open House Day' }
      ];

      newsCards.forEach((card, index) => {
        const dateDay = card.querySelector('.date-day');
        const dateMonth = card.querySelector('.date-month');
        const dateYear = card.querySelector('.date-year');
        const newsTitle = card.querySelector('.news-content h3');

        const expected = expectedEvents[index];
        expect(dateDay?.textContent).toBe(expected.day);
        expect(dateMonth?.textContent).toBe(expected.month);
        expect(dateYear?.textContent).toBe(expected.year);
        expect(newsTitle?.textContent).toContain(expected.title);
      });
    });

    it('should have proper accessibility attributes for news links', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const newsLinks = compiled.querySelectorAll('.news-link');

      newsLinks.forEach(link => {
        expect(link.getAttribute('href')).toBe('#');
        expect(link.textContent?.trim()).toBe('Read More');
      });
    });
  });

  describe('Contact Section', () => {
    it('should display contact section with form and info', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const contactSection = compiled.querySelector('#contact');
      const contactForm = compiled.querySelector('.contact-form');
      const contactInfo = compiled.querySelector('.contact-info');

      expect(contactSection).toBeTruthy();
      expect(contactForm).toBeTruthy();
      expect(contactInfo).toBeTruthy();
    });

    it('should display correct contact information', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const contactList = compiled.querySelector('.contact-list');
      const listItems = contactList?.querySelectorAll('li');

      expect(listItems?.length).toBe(3);
      expect(listItems?.[0].textContent).toContain('info@schoto.ac.zw');
      expect(listItems?.[1].textContent).toContain('+263 292 2258174');
      expect(listItems?.[2].textContent).toContain('School of Hospitality & Tourism, Zimbabwe');
    });

    it('should display social media links', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const socialMedia = compiled.querySelector('.social-media');
      const socialTitle = compiled.querySelector('.social-media h3');
      const socialLinks = compiled.querySelectorAll('.social-links a');

      expect(socialMedia).toBeTruthy();
      expect(socialTitle?.textContent).toContain('Follow Us');
      expect(socialLinks.length).toBe(3);
    });

    it('should have proper social media links with correct attributes', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const socialLinks = compiled.querySelectorAll('.social-links a');
      
      const expectedSocials = [
        { href: 'https://facebook.com/schotozimbabwe', label: 'Facebook', handle: 'schotozimbabwe' },
        { href: 'https://twitter.com/schotozw', label: 'Twitter', handle: '@schotozw' },
        { href: 'https://instagram.com/schotozimbabwe', label: 'Instagram', handle: '@schotozimbabwe' }
      ];

      socialLinks.forEach((link, index) => {
        const expected = expectedSocials[index];
        expect(link.getAttribute('href')).toBe(expected.href);
        expect(link.getAttribute('target')).toBe('_blank');
        expect(link.getAttribute('rel')).toBe('noopener noreferrer');
        expect(link.getAttribute('aria-label')).toBe(expected.label);
        expect(link.textContent?.trim()).toContain(expected.handle);
      });
    });

    it('should have form with proper input fields', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const nameInput = compiled.querySelector('input[type="text"]');
      const emailInput = compiled.querySelector('input[type="email"]');
      const messageTextarea = compiled.querySelector('textarea');
      const submitButton = compiled.querySelector('button[type="submit"]');

      expect(nameInput).toBeTruthy();
      expect(emailInput).toBeTruthy();
      expect(messageTextarea).toBeTruthy();
      expect(submitButton).toBeTruthy();
      expect(submitButton?.textContent?.trim()).toBe('Send Message');
    });
  });

  describe('Responsive Design Elements', () => {
    it('should have responsive classes for grid layouts', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const cardsGrid = compiled.querySelector('.cards-grid');
      const facilitiesGallery = compiled.querySelector('.facilities-gallery');
      const newsGrid = compiled.querySelector('.news-grid');
      const contactGrid = compiled.querySelector('.contact-grid');

      expect(cardsGrid).toBeTruthy();
      expect(facilitiesGallery).toBeTruthy();
      expect(newsGrid).toBeTruthy();
      expect(contactGrid).toBeTruthy();
    });
  });

  describe('Section Order and Structure', () => {
    it('should display sections in correct order', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const sections = compiled.querySelectorAll('section');

      expect(sections[0].classList.contains('hero')).toBeTruthy();
      expect(sections[1].id).toBe('about');
      expect(sections[2].id).toBe('programmes');
      expect(sections[3].id).toBe('facilities');
      expect(sections[4].id).toBe('news-events');
      expect(sections[5].id).toBe('contact');
    });

    it('should have proper section styling classes', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      
      expect(compiled.querySelector('#programmes')?.classList.contains('section-alt')).toBeTruthy();
      expect(compiled.querySelector('#news-events')?.classList.contains('section-alt')).toBeTruthy();
      expect(compiled.querySelector('#contact')?.classList.contains('section-alt')).toBeTruthy();
    });
  });
});