const baseurl = import.meta.env.VITE_BACKEND_BASEURL;
export const login = async (email: string, name: string, picture: string) => {
  try {
    const response = await fetch(`${baseurl}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name, picture }),
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      return { error: true, error_detail: errorDetails, data: null };
    } else {
      const result = await response.json();
      return { error: false, error_detail: null, data: result.data };
    }
  } catch (error: any) {
    return { error: true, error_detail: error.message, data: null };
  } finally {
  }
};
