import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClinet = useQueryClient();

  const { mutate: checkout, isPending: isCheckingout } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking ${data.id} succssfully checked out`);
      queryClinet.invalidateQueries({ active: true });
    },

    onError: () => toast.error("there was an error while cheking out"),
  });
  return { checkout, isCheckingout };
}
