"use client";

import { fetchClients } from "@/lib/actions/client.action";
import { fetchIssues } from "@/lib/actions/issue.action";
import { fetchNewLetters } from "@/lib/actions/news-letter.action";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type ContextType = {
  clients: number;
  newsLetterSubscriptions: number;
  totalOpenIssues: number;
  totalClosedIssues: number;
  setClosed: Dispatch<SetStateAction<boolean>>;
  newsLetters: any[];
};
const DashboardContext = createContext<ContextType>({} as ContextType);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [clients, setClients] = useState<number>(0);
  const [newsLetterSubscriptions, setNewsLetterSubscriptions] =
    useState<number>(0);
  const [totalOpenIssues, setTotalOpenIssues] = useState<number>(0);

  const [totalClosedIssues, setTotalClosedIssues] = useState(0);
  const [closed, setClosed] = useState(false);
  const [newsLetters, setNewsLetters] = useState<any[]>([]);

  useEffect(() => {
    async function getTotalClients() {
      try {
        const totalClients = await fetchClients();
        setClients(totalClients.length);
      } catch (error) {
        throw error;
      }
    }
    getTotalClients();
  }, []);

  useEffect(() => {
    async function getTotalNewLetterSubscriptions() {
      try {
        const letters = await fetchNewLetters();
        setNewsLetters(letters);

        setNewsLetterSubscriptions(letters.length);
      } catch (error) {
        throw error;
      }
    }
    getTotalNewLetterSubscriptions();
  }, []);

  useEffect(() => {
    async function getTotalActiveIssues() {
      try {
        const openIssues: any = await fetchIssues();
        setTotalOpenIssues(openIssues.length);
      } catch (error) {
        throw error;
      }
    }
    getTotalActiveIssues();
  }, []);

  useEffect(() => {
    async function getTotalClosedIssues() {
      try {
        const closedIssues = await fetchIssues();
        if (!closed) {
          setTotalClosedIssues(closedIssues.length);
        } else {
          let res = closedIssues.length - closedIssues.length + 1;
          setTotalClosedIssues(res++);
          setClosed(false);
        }
      } catch (error) {
        throw error;
      }
    }
    getTotalClosedIssues();
  }, [closed]);

  return (
    <DashboardContext.Provider
      value={{
        clients,
        newsLetterSubscriptions,
        totalOpenIssues,
        totalClosedIssues,
        setClosed,
        newsLetters,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
