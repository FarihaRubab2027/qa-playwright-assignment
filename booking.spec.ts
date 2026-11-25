import { test, expect } from '@playwright/test';

test.describe('Restful Booker API Tests', () => {
  let bookingId: number;

  test('should create a new booking', async ({ request }) => {
    const response = await request.post('https://restful-booker.herokuapp.com/booking', {
      data: {
        firstname: 'Fariha',
        lastname: 'Rubab',
        totalprice: 150,
        depositpaid: true,
        bookingdates: {
          checkin: '2026-12-01',
          checkout: '2026-12-05',
        },
        additionalneeds: 'Breakfast',
      },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.booking.firstname).toBe('Fariha');
    bookingId = body.bookingid;
  });

  test('should fetch all bookings', async ({ request }) => {
    const response = await request.get('https://restful-booker.herokuapp.com/booking');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
  });
});