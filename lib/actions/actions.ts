"use server";

import { baseURL } from "@/constants";
import { NewsProps, TeamProps, TournamentsProps, UserProps } from "@/types";
import axios from "axios";
import { cookies } from "next/headers";

export const signIn = (token: string, username: string) => {
  try {
    cookies().set("token", token, { maxAge: 86400, httpOnly: true });
    cookies().set("username", username, { maxAge: 86400, httpOnly: true });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const signOut = () => {
  try {
    cookies().delete("token");
    cookies().delete("username");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const isSignedIn = async (): Promise<boolean> => {
  try {
    return cookies().has("token");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCurrentUser = async (): Promise<UserProps> => {
  try {
    const username = cookies().get("username");
    const { data } = await axios.get(
      `${baseURL}/users/user/${username?.value}/`
    );

    return data as UserProps;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCurrentUserToken = (): Object | undefined => {
  try {
    const tokenData = cookies().get("token");
    return tokenData?.value;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUserData = async (userId: number): Promise<UserProps> => {
  try {
    const { data } = await axios.get(`${baseURL}/users/user/${userId}/`);

    return data as UserProps;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTeamData = async (teamId: number): Promise<TeamProps> => {
  try {
    const { data } = await axios.get(`${baseURL}/teams/team/${teamId}/`);

    return data as TeamProps;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTeamsList = async (
  page?: number,
  size?: number
): Promise<TeamProps[]> => {
  try {
    const { data } = await axios.get(`${baseURL}/teams/list/`, {
      params: {
        page,
        size,
      },
    });

    return data as TeamProps[];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSearchTeams = async ({
  page = 1,
  search,
}: {
  page?: number;
  search?: string | undefined;
}) => {
  try {
    const size = 12;

    const { data } = await axios.get(`${baseURL}/teams/search/`, {
      params: {
        page,
        size,
        q: search,
      },
    });

    return data as TeamProps[];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCaptains = async (teams: TeamProps[]): Promise<[]> => {
  try {
    const captainNames = await Promise.all(
      teams.map(async (team) => {
        const response = await getUserData(team.captain);
        return response.username;
      })
    );

    return captainNames as [];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTournamentData = async (
  tournamentId: number
): Promise<TournamentsProps> => {
  try {
    const { data } = await axios.get(`${baseURL}/tours/tour/${tournamentId}/`);

    return data as TournamentsProps;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTournamentsList = async (
  page?: number,
  size?: number
): Promise<TournamentsProps[]> => {
  try {
    const { data } = await axios.get(`${baseURL}/tours/list/`, {
      params: {
        page,
        size,
      },
    });

    return data as TournamentsProps[];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSearchTournaments = async ({
  page = 1,
  search,
}: {
  page?: number;
  search?: string | undefined;
}) => {
  try {
    const size = 12;

    const { data } = await axios.get(`${baseURL}/tours/search/`, {
      params: {
        page,
        size,
        q: search,
      },
    });

    return data as TournamentsProps[];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getNewsData = async (newsId: number): Promise<NewsProps> => {
  try {
    const { data } = await axios.get(`${baseURL}/news/${newsId}/`);

    return data as NewsProps;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getNewsList = async (
  page?: number,
  size?: number
): Promise<NewsProps[]> => {
  try {
    const { data } = await axios.get(`${baseURL}/news/list/`, {
      params: {
        page,
        size,
      },
    });

    return data as NewsProps[];
  } catch (error) {
    console.error(error);
    throw error;
  }
};
