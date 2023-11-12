export interface UserSignInProps {
  username: string;
  password: string;
}

export interface UserProps {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  group: string;
  rating_dota2: number;
}

export interface TeamProps {
  id: number;
  members: UserProps[];
  name: string;
  description: string;
  created_at: string;
  captain: number;
}

export interface TeamAddProps {
  name: string;
  description: string;
  members: string[];
}

export interface TournamentsProps {
  id: number;
  teams: TeamProps[];
  name: string;
  description: string;
  time: string;
  status: string;
}

export interface NewsProps {
  id: number;
  title: string;
  content: string;
  created_at: string;
}
