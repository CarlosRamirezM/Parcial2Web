function DetailRoom(props) {
  return (
    
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.room.name}</h5>
        </div>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAADMzMx0dHTCwsJmZmbFxcVwcHC+vr55eXmlpaWWlpbd3d38/Pzy8vL29vY1NTXj4+OwsLCfn58uLi7W1tZdXV2Hh4e3t7cjIyNTU1NEREQZGRns7OyRkZGysrJ/f39hYWEUFBQ/Pz9JSUlBQUEpKSkNDQ08vyRdAAAEBUlEQVR4nO3Z63KiShSGYQUEOdMgB1EQoxnv/w63Uy5TY0YitsuB7v29/xIC3U9BB5TZDCGE/r8JMfYM3leYV2W9mjtjz+MdhaLKio/5JXPs2fAWCdt3D/M/00coDM+s1/O/0kEYG7tuc8emgTCMg7Qt+miKC6PAap3DA5yqwsDOFpvtEJx6wtj23GQwTSlh2OReWT9rU0TYnJ9M9k+fOEWEwdIvktMLuOkKw8bKnN4bnNrCWBhZJ7ngJi9s8p17/ijA3iSEedXee6LUQRiLyl8Mv3kPab0xu0kIzwvON4+sttPR8Y0gns3ssYXCSM0j70W5dvxKRNcBrBGFjVduWGnzbe3v8m+jjCk0GG2rutsZzb1RNBDWXZaLuHcUpYVrJ7OaftslNYWnVeEvg2GjKCdM9uUyv7vgelJJWJde3oTPjqKGMHE9+9F662viwu3nwrNfe9cwXeHBaa0genyUR01SWLSpiJ5ecD1NS/jxWe4MLho1HWGSGm95uTcd4eJNo9wKi9wY0jM33B8aQzgwi2fsCQttnrEh5AlCCF8JQp4ghPCVIOQJQt2Eq0VPt+8qFRa6fX9m6iLs/QTsQCgThDxBSEEoFYQ8QUhBKBWEPEFIQSgVhDxBSEEoFYQ8QUhBKBWEPEFIQSgVhDxBSEEoFYQ8QUhBKBWEPEFIQSgVhDxBSEEoFYQ8QUhBKBWEPOkhzG6O1N5s00Po3RzJv9kGIQWhVBAOD0IIZxBKBuHwIIRwBqFkEA4PQghnEEoG4fAghHAGoWQQDg9C9YX6f6s/C//sdpMmwh+CkIJQKgh5gpCCUCoIeYKQglAqCHmCkIJQKgh5gpCCUCoIeYKQglAqCHmCkIJQKgh5gpCCUCoIeYKQglAqCHmCkIJQKgh5gpCCUCoIeYKQglAqCHmCkIJQKgh5gpB6izCfrtAYeHDT/bH9dIVFz5S/7z5/pvWirYwgvDv8Pxf29orw0mldl6klNBZ+SesyW4oo1ldIrQqzrXLxCnTiQurXZl9Wtty1q4bw2rYuPbvRWUiti863RDPs2lVSSK1qx7dy8eAGo7KQ2iZ7vzJ6F6kGwmsfRetZTfz9lGokpJLFeZEGzRdUPyGVnBfp0jj/37Vvfq2RkDolx5ufe4WLYcf7ttdyULuy+Pz1BtzdeoX5sMn27f6wWOS71qzX4wn/UXEUVFlZayz8KrDS8rg+aSy8FAfGrtwfOa/diQmpSARV6x4/9BVSYXxepO6nxsKvAsvr6mSrsfBSFBhpuTg+CVVJSEVNnvru8bFNWeG1MK+87vDw/qKwkIpyO+3qQ++1q76QakSels7m71OqjZCKo/MidRKNhdd+L1Jz8/sp0Bl7Ku/tvEitseeAEEIIIXX6D+U3Y09n6FC4AAAAAElFTkSuQmCC" className="card-img-top" alt="..." />
      </div>
    
  );
}

export default DetailRoom;