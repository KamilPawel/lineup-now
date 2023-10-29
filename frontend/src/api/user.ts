export interface ApiResponse {
  data: UserData;
  support: SupportInfo;
}
// Information about the user
export interface UserData {
  id: number;
  email: string;
  first_name: string; // in TypeScript, it's common to use camelCase, but here we're matching the response's structure
  last_name: string;
  avatar: string; // This holds a URL, so it's a string
}

// Information about the support
interface SupportInfo {
  url: string; // This holds a URL, so it's a string
  text: string;
}

export const fetchUserById: (userId: number) => Promise<ApiResponse> = async (
  userId
) => {
  const emptyResponse: ApiResponse = {
    data: {
      id: -1, // -1 indicates not found
      email: '',
      first_name: '',
      last_name: '',
      avatar: ''
    },
    support: {
      url: '',
      text: ''
    }
  };

  try {
    const response = await fetch(`http://localhost:8000/user/${userId}/`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Attempt to decode the response as JSON
    const data: ApiResponse = await response.json();
    return data; // If everything was successful, return the actual data
  } catch (error) {
    // If we're here, either the network request failed, or the response couldn't be parsed as JSON.
    console.error('Fetch failed:', error);

    // Return the fallback default object
    return emptyResponse;
  }
};
