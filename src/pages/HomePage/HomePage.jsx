import PageTitle from "../../components/PageTitle/PageTitle";
import { FcContacts } from "react-icons/fc";

const HomePage = () => {
  return (
    <div>
      <PageTitle>
        PhoneBook <FcContacts size={36} />
      </PageTitle>
    </div>
  );
};

export default HomePage;
