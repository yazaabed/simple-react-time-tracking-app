class Utils {
  static milisecondsToHumanString(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

    return [hours.toString(), minutes.toString(), seconds.toString()].join(":");
  }

  private;
}

export default Utils;
