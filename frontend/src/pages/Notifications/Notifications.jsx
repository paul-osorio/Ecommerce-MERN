const Notifications = () => {
  return (
    <div className="p-5">
      <h1 className="font-medium text-xl text-gray-600 mb-5">Notifications</h1>
      <div>
        <NotificationCard
          Title="Your order is successfull asfsaf as asf asf asf "
          Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <NotificationCard
          Title="Your order is successfull"
          Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <NotificationCard
          Title="Your order is successfull"
          Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <NotificationCard
          Title="Your order is successfull"
          Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <NotificationCard
          Title="Your order is successfull"
          Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
};

const NotificationCard = ({ Title, Content }) => {
  return (
    <div className="border rounded-lg p-5 mb-2 relative">
      <div className="flex justify-between">
        <div className="flex space-x-3 w-full">
          <div>
            <div className="h-16 w-16 bg-red-500"></div>
          </div>
          <div>
            <span className="text-xs text-gray-500 ">07/03/2022 14:36</span>

            <h1 className=" line-clamp-1">{Title}</h1>
            <p className="text-sm text-gray-500 line-clamp-2">{Content}</p>
          </div>
        </div>
        <div className="w-44">
          <div className="flex items-center justify-center border rounded-full text-xs px-3 py-2">
            View Details
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
