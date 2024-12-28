import { Client } from "twitter-api-sdk";

// Initialize Twitter client
const client = new Client('AAAAAAAAAAAAAAAAAAAAAGtMxgEAAAAAYzWFrhAznfvBjHjHdyaV%2B60aNMw%3DliBPtuHTyOHLr7ztekswr5F7GlVE6Hxp62oVU0ckB0nCrcERt6');

// Function to post a tweet with an image
export async function postTweetWithImage(status: string, imagePath: string) {
  try {
    // Use the SDK's method to upload media and post a tweet
    const tweet = await client.tweets.createTweet({ text: status });
    console.log('Tweet posted successfully!', tweet);
  } catch (error) {
    if (error) {
      console.error('Twitter API error:', error);
    } else {
      console.error('Unexpected error:', error);
    }
  }
}