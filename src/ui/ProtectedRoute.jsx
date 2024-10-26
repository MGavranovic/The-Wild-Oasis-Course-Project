import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50) l;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. Load the authenticate user
  const { isPending, isAuthenticated, isFetching } = useUser();
  // 3. If no authenticated user, redirect to /login
  useEffect(
    function () {
      if (!isAuthenticated && !isPending && !isFetching) navigate("/login");
    },
    [isAuthenticated, navigate, isPending, isFetching]
  );
  // 2. While loading, show spinner
  if (isPending)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );
  // 4. If there is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
