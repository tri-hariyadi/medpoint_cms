export type Session = {
  userId?: string;
  token?: string;
  name?: string;
  isLoading?: boolean;
} | null;

export interface SessionContextType {
  session: Session;
  setSession: (_session: Session) => void;
  getSession: () => void;
  clearSession: () => void;
}
