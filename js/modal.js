$("#videoModal").on("shown.bs.modal", () => {
  $("#promo-video").attr(
    "src",
    "https://www.youtube.com/embed/bMMBM6g7oTw?autoplay=1"
  );
});
$("#videoModal").on("hide.bs.modal", () => {
  $("#promo-video").removeAttr(
    "src",
    "https://www.youtube.com/embed/bMMBM6g7oTw?autoplay=1"
  );
});
