import { NextRequest, NextResponse } from 'next/server';

/**
 * Webhook endpoint for Farcaster Mini App
 * Handles incoming webhook requests from Farcaster
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the webhook payload for debugging
    console.log('Webhook received:', {
      timestamp: new Date().toISOString(),
      payload: body,
      headers: Object.fromEntries(request.headers.entries()),
    });

    // Handle different webhook events
    switch (body.type) {
      case 'frame_added':
        console.log('Frame added to user:', body.data);
        break;
      
      case 'frame_removed':
        console.log('Frame removed from user:', body.data);
        break;
      
      case 'notifications_enabled':
        console.log('Notifications enabled for user:', body.data);
        break;
      
      case 'notifications_disabled':
        console.log('Notifications disabled for user:', body.data);
        break;
      
      default:
        console.log('Unknown webhook type:', body.type);
    }

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Webhook processed successfully',
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Webhook error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process webhook',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

/**
 * Handle GET requests for webhook verification
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const challenge = searchParams.get('hub.challenge');
  
  if (challenge) {
    // Return the challenge for webhook verification
    return new Response(challenge, { status: 200 });
  }
  
  return NextResponse.json(
    { 
      message: 'Webhook endpoint is active',
      timestamp: new Date().toISOString(),
      app: 'Test Working Claude Counter App'
    },
    { status: 200 }
  );
}
