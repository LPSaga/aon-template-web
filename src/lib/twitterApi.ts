import axios from 'axios';

// Twitter API configuration
const TWITTER_API_BASE_URL = 'https://api.twitter.com/2';

interface TwitterConfig {
  bearerToken: string;
}

class TwitterAPI {
  private bearerToken: string;

  constructor(config: TwitterConfig) {
    this.bearerToken = config.bearerToken;
  }

  private getHeaders() {
    return {
      'Authorization': `Bearer ${this.bearerToken}`,
      'Content-Type': 'application/json',
    };
  }

  // Post a tweet
  async postTweet(text: string) {
    try {
      const response = await axios.post(
        `${TWITTER_API_BASE_URL}/tweets`,
        { text },
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      console.error('Error posting tweet:', error);
      throw error;
    }
  }

  // Get user's tweets
  async getUserTweets(userId: string, maxResults = 10) {
    try {
      const response = await axios.get(
        `${TWITTER_API_BASE_URL}/users/${userId}/tweets`,
        {
          headers: this.getHeaders(),
          params: {
            max_results: maxResults,
            tweet.fields: 'created_at,public_metrics'
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error getting user tweets:', error);
      throw error;
    }
  }

  // Search tweets
  async searchTweets(query: string, maxResults = 10) {
    try {
      const response = await axios.get(
        `${TWITTER_API_BASE_URL}/tweets/search/recent`,
        {
          headers: this.getHeaders(),
          params: {
            query,
            max_results: maxResults,
            tweet.fields: 'created_at,public_metrics'
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error searching tweets:', error);
      throw error;
    }
  }
}

export default TwitterAPI;
