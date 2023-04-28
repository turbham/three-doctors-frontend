export default {
  methods: {
    ReduceText(text) {
      const totalLenght = 28;
      if (text?.length > totalLenght) {
        const allTakenTxt = text.substring(0, totalLenght);
        return `${allTakenTxt}...`;
      }
      return text;
    },
  },
};
