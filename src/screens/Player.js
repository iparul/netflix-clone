import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./Player.css";
let trailer = [
  "https://imdb-video.media-imdb.com/vi554943001/1434659607842-pgv4ql-1658938119009.mp4?Expires=1680535640&Signature=HqzYF2yKpJoGEY0Og54mHAk205fGaAYhuEahruD9v-kttMuV-L8LJ5Ui44LL10F3b-j8vQHltgAdy3zUKyv9wUa-9WxU8WweMIunhDpJXBEzPXpNLnxHQs5fPgG2~C7hujj30bSurupQ~aq1DKjnUDoGx4aBaJ8tzHwiVvQB9fDzW6KdrUJHQrgWUhYIsIdii4-q0GDNk5F9iL~~jur3zaFEwZg6dPle4QZeS98jWod4VyyHqt41yAMUZvgzsjtOyoYW8TkxbjYyd6sehi4S~L61hNK-HxTbG5gd5FLyvF5XSVveR-m2b56pWjIzvSmEIRjN3pw2O4rZZhrsnYJidg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
  "https://imdb-video.media-imdb.com/vi63356441/1434659607842-pgv4ql-1589994136439.mp4?Expires=1680536295&Signature=GY2oOfG48FXgkEC3188TT9L5UJ5LO3d5pWbOTpAx1f2MDcftXijYuMrzW6s6Q0kp9KdEosAiYan9ryFTGmGrmJ488O1KLa-7VNhhvZAHZAYOSpad~F72msiyuqgaTaMvhjVvS5~pBpMIQhSF2gijvb1YNnCWCzBSfP2Qa~uLns9BAnr5~aast-C8E2vjKhRqkmAl0hebjczLQuQqWxJ2rQUI~JVdFyU4P5mDZra24xSqbZptJlj2NPg-rKhTWDMbdoxo9ReQei3HdNG-C-tTHsJNCthoSRLIqN~6VqmIG2SvXIohCgfLhihBkGB6LW6DUPibHyJHTMVESsttj~JrwQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
  "https://imdb-video.media-imdb.com/vi1245823513/1434659607842-pgv4ql-1663769136412.mp4?Expires=1680536175&Signature=soFUSjrZgh~1yA6pm6Qdjpec4pFsOlEAbS7JjV7Vm0HPpb75WXLIUF1xI09xHi5MMFEljqQ0yAyuJ30KXTbxDz9zqYyl3jNmEnnXbdMaBn6o8pedwuMBQSw1it6O2nU9Wb~ddhudK6sCDJzSXAmBhun6bkVSKt0eFutIB44jDsZ4HnkWvAuO0K0ylxk7DqFvtuFM9Cby0z8rhK~1p2v3kG8UYuqdeaYjLKhiADHEGLWU3l7OLPFMEcUJdiX689eKPFcF-COyRBu2X2XTUCB6uB~MAh8sP8zCkIEcFOFD-0zPx4Ybf94hbIbkDwHB0gF6NMFuv9rKFeN64KrX~R3~Yg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
  "https://imdb-video.media-imdb.com/vi744668441/1434659607842-pgv4ql-1555196481777.mp4?Expires=1680536641&Signature=S4d7cal~fG189ejx3FN8ZPlb1uWC-B4i7emUrLBYjqBVcD-KRzXnQtRXAKkQcFUHw4k7VhzTB8px8pN0xyczJYUAYGN~GHoHbv3aN1hNEtTEJTTPVuB-qaAlTB~3vA91DMtTxDsDCyz5iUEkgWMWRpJh05olJBFhFdNkC1svJ-sgPMhVW5EpnQ72FCQhbEUk62r1S5wFufj0WT5XqBUiU4e~s-L~feBZ9frYlwMAXOas0jasyWzmSQx1~LZBE2zEYAlzxowIb~NLzY00nM7sLpglWmuqirXP~CB-4YJ2ncU3RiOqP6E9CnkpW6rzY8shQi9eMpF6Uf9thPqGN8ln7Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
  "https://imdb-video.media-imdb.com/vi602522137/1434659607842-pgv4ql-1654536060777.mp4?Expires=1677764153&Signature=CC6HIwJSsyegAh34C4HkJYQavQIuxciwdNriUqyDArxJGHoyroVW39Z-oQmyBCNcXGxcS8nCbU~M-xsGK0qQkCxypW2bwMQoudr278hmjEszsi6WX9-n5LH28lXeUaQb9edGEpt1KzbkqxRuclxGuHYDcHcbWMIuDFIjTcaxSTCRO8A8phh9mKaREGrN30fWNADlEqtb3d6~lC6NjZhyKQhwTMs01tooww2RVvK7BcKjv8yjjrDPY16Gw52OS13lYHzZKnjs5WGkuitn0c768oZed32WhuVxBJOJLdAm9MFXpOP6dN1z7Iw9JAULYKti0Vp9sz-qajNBiATiqJqL2A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
  "https://imdb-video.media-imdb.com/vi2020065817/1434659607842-pgv4ql-1661782648378.mp4?Expires=1677764219&Signature=GDg62PmcRheKgn8X7j3IGT~OUQur~AEhBcvo0NzwoFVMLnjSoK4wCO8aZ~1gplikv~IFxroGuZDhfA500SZM5Ab4aZSaaVc7vQ4pQgcGAtM1rjph7F9gdrxD5j2cQn3E1oVmuXpIFpwlk6TNPwsOFO8u-6vx4yJ1U7TGt15MPs~eFsM7dFcg-QuZwlKSFF5fqW7bm4l2Qvna48HvqGQT9LvYD-~DWdMWd4nKfKYUamLqH840xJvCPg2udsp1SllezD0EutgVnsty4l1cyaIYKO28uWGSUgLyCkFUsWNMR46Ano13zDutOi1ZpB9HFmNwPEqzCpN4ks~NmoEkrf~JCQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
  "https://imdb-video.media-imdb.com/vi1072284185/1434659607842-pgv4ql-1654533085801.mp4?Expires=1677764315&Signature=mZxX8~RmFOZ97bP9fp2rrN7jbSXTeKC8e6xH6mK5z7dlkF2kuxfrvZ1XrNA63UGwWkfhvHMuCJL1Chwda3VUW1csKvy1UsU31sTkXBHFUKAoJnbAcvXnEPWFWK6hzZgSgAWvWjiYfG1l~gL-lyo89Gj109uIsI6emoL~Eh~2XDQWzQgTYQbmFBRlYQdfjLm0XrCKVjmCsdrMrxqsK3BcuqV2uN-BBdGFJ~KdArjrzVunieRiod6zkPmZ6OR3RsL5r30hvhG3h8-mPhIWRpt75eKxMLcLZ~4L27u69iKoj1gHO9dZWUBGeh5xeDqpTikpvlWCbU2~nIz~JYZvDp4LFQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
  "https://imdb-video.media-imdb.com/vi2328346905/1434659607842-pgv4ql-1605648467813.mp4?Expires=1677764394&Signature=KcZR9IKZsOCYgC7rRSMnvnsXshC6tZddl0qjjBu9SIxm7e0ql9RGS1lfxC53m6Gk71ZWpeA7tIYe7wStIjwq2nA98T8M7lakLFZYNQrpFFx9xfKvl~grguc0PwFUyjMBxQWct3YPiiUJq5zP4ANRLHIvHefpAB6asQQSjiKVAEtrjPLigeVzqCDTOzUsHTepylp0fo22W5XjC9fVBsulNeTvLbOjCZc6oUQ6xxTuKcwo1zEOELQ583mKu5M~QsywxyBJ9zNuA4NUZHy4PCWa0aK9kinv7pOnGREQJ53idU~0dkjK2YokaKH-mfJTl9ay5XnuLOy5We6jgAzUsas4wQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
  "https://imdb-video.media-imdb.com/vi2446179865/1434659607842-pgv4ql-1590503125523.mp4?Expires=1677764459&Signature=hj-qbmMqeYkiyJadItVV2DgDfIG4Mz03DOSeWf1x2BolRDVhQBGdAUMKL~Y6kWAB8VdDujBKqaV1CMv9NGO53oZVaGBT4dWZpXsW-bEWpCEbbgdbLzwTYHOjk02RysD6tHDz-lqpxipODgC99bknYOV2aDNOhYVXU4-qpI9x~iT80CNl8wZOeV4jgv0huQCkZzhbsyWGZOG1MZsK8K1mWP2n3mDUJbzE-taxI8hWK3uzhFLllTebmZ2QOFkIB2DbkqWTg~zXlyE58QEn9IsgFMybXcwaBQV70jViTbOyNbanI~zDQl-oVmGDDjqCUYPu~Oy2ZCrK2W8cV0Dz7mk09A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
];
export default function Player() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    generateRandom();
  }, []);
  function generateRandom(maxLimit = 4) {
    let rand = Math.random() * maxLimit;

    rand = Math.floor(rand); // 99
    setIndex(rand);
    return rand;
  }

  return (
    <div>
      <div className="playerSreen">
        <div className="playerScreen_back">
          <BsArrowLeft
            className="playerScreen_backbutton"
            onClick={() => navigate(-1)}
          />
        </div>
        <video
          className="playerScreen_video"
          src={trailer[index]}
          autoPlay
          loop
          controls
          muted
        />
      </div>
    </div>
  );
}
