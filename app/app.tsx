import { QueryClient, QueryClientProvider } from "react-query";
import Page from "./page";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            {/* Your application components */}
            <Page />
        </QueryClientProvider>
    );
};

export default App;
